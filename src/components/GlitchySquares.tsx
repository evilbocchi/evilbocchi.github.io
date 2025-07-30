import { useState, useEffect, useRef, useMemo } from 'react';

interface GlitchySquaresProps {
    cursorPosition: { x: number; y: number; };
}

interface Square {
    id: number;
    active: boolean;
    color: string;
    opacity: number;
    transitionDelay?: string;
    transitionDuration?: string;
}

const GlitchySquares: React.FC<GlitchySquaresProps> = ({ cursorPosition }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [squares, setSquares] = useState<Square[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const squareSize = 40; // Size of each square in the grid - uniform for all squares
    const interactionRadius = 150; // Area around cursor that activates squares
    const colors = useMemo(() => ['#ff00ff', '#ee00ff', '#dd00ff', '#cc00ff', '#bb00ff', '#aa00ff', '#9900ff', '#8800ff'], []); // Pink to violet gradient
    const glitchInterval = useRef<NodeJS.Timeout | null>(null);

    // Update dimensions when window resizes
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
        };

        window.addEventListener('resize', updateDimensions);
        updateDimensions();

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    
    // Initialize grid of squares
    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        const cols = Math.ceil(dimensions.width / squareSize);
        const rows = Math.ceil(dimensions.height / squareSize);
        const totalSquares = cols * rows;

        const newSquares: Square[] = [];
        for (let i = 0; i < totalSquares; i++) {
            newSquares.push({
                id: i,
                active: false,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 0
            });
        }

        setSquares(newSquares);
    }, [dimensions, colors]);  // Set up a global glitch effect interval
    useEffect(() => {
        // Create a periodic glitch effect that randomly activates squares
        glitchInterval.current = setInterval(() => {
            if (squares.length === 0) return;

            // Randomly activate some squares for a brief moment
            if (Math.random() > 0.6) {
                const glitchCount = Math.floor(Math.random() * 15) + 10; // More squares for a richer effect
                const randomIndices: number[] = [];

                // Create clusters of squares for a more cohesive pattern
                const startIndex = Math.floor(Math.random() * squares.length);
                const cols = Math.ceil(dimensions.width / squareSize);

                for (let i = 0; i < glitchCount; i++) {
                    // Sometimes add nearby squares to create patterns
                    if (randomIndices.length > 0 && Math.random() > 0.5) {
                        const lastIndex = randomIndices[randomIndices.length - 1];
                        // Add adjacent squares (right, left, up, down)
                        const adjacentOffsets = [1, -1, cols, -cols];
                        const offset = adjacentOffsets[Math.floor(Math.random() * adjacentOffsets.length)];
                        const newIndex = lastIndex + offset;

                        if (newIndex >= 0 && newIndex < squares.length) {
                            randomIndices.push(newIndex);
                        } else {
                            randomIndices.push(Math.floor(Math.random() * squares.length));
                        }
                    } else {
                        randomIndices.push(startIndex + i);
                    }
                }
                setSquares(prevSquares => {
                    return prevSquares.map((square, index) => {
                        if (randomIndices.includes(index)) {
                            // Create varied transition timings for smoother effects
                            const transDelay = `${Math.random() * 50}ms`;
                            const transDuration = `${150 + Math.random() * 200}ms`;

                            return {
                                ...square,
                                active: true,
                                // Use a gradient intensity for more visual interest
                                opacity: 0.1 + Math.random() * 0.2,
                                color: colors[Math.floor(Math.random() * colors.length)],
                                transitionDelay: transDelay,
                                transitionDuration: transDuration
                            };
                        }
                        return square;
                    });
                });
                // Reset the random squares after a short delay with cascading effect
                randomIndices.forEach((index, i) => {
                    // First, start fading out by reducing opacity but keeping active
                    setTimeout(() => {
                        setSquares(prevSquares => {
                            return prevSquares.map((square, sqIndex) => {
                                if (sqIndex === index) {
                                    // Create longer fade-out transitions
                                    const fadeOutDuration = `${200 + Math.random() * 150}ms`;
                                    const fadeOutDelay = `${Math.random() * 50}ms`;

                                    return {
                                        ...square,
                                        opacity: square.opacity * 0.4, // Start fading instead of immediate deactivation
                                        transitionDuration: fadeOutDuration,
                                        transitionDelay: fadeOutDelay,
                                    };
                                }
                                return square;
                            });
                        });

                        // Then fully deactivate after the transition
                        setTimeout(() => {
                            setSquares(prevSquares => {
                                return prevSquares.map((square, sqIndex) => {
                                    if (sqIndex === index) {
                                        return {
                                            ...square,
                                            active: false,
                                            opacity: 0
                                        };
                                    }
                                    return square;
                                });
                            });
                        }, 200); // Allow time for the fade out

                    }, 100 + Math.random() * 200 + i * 15); // Staggered timing for cascade effect with longer durations
                });
            }
        }, 400); // Slightly slower interval for smoother glitching

        return () => {
            if (glitchInterval.current) {
                clearInterval(glitchInterval.current);
            }
        };
    }, [squares.length, colors, dimensions.width]);  // Update squares based on cursor position


    useEffect(() => {
        if (squares.length === 0) return;

        const cols = Math.ceil(dimensions.width / squareSize);

        setSquares(prevSquares => {
            return prevSquares.map(square => {
                const col = square.id % cols;
                const row = Math.floor(square.id / cols);

                const squareX = col * squareSize;
                const squareY = row * squareSize;

                // Calculate distance from cursor to square center
                const dx = squareX + squareSize / 2 - cursorPosition.x;
                const dy = squareY + squareSize / 2 - cursorPosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Determine if square should be active based on cursor proximity
                // Use a wider radius for more squares to be active
                const shouldBeActive = distance < interactionRadius;

                // Create a more dynamic pattern based on distance
                // Random glitching effect with higher probability closer to cursor
                const activeProbability = shouldBeActive ?
                    0.9 - (distance / interactionRadius) * 0.5 : 0;

                const randomActive = Math.random() < activeProbability;
                // Fade out based on distance from cursor
                if (randomActive) {
                    // Calculate color index based on distance for a nice gradient effect
                    const colorIndex = Math.min(
                        colors.length - 1,
                        Math.floor((distance / interactionRadius) * colors.length)
                    );

                    // Vary transition timing for smoother overall effect
                    const transDelay = `${Math.random() * 50}ms`;
                    const transDuration = `${100 + Math.random() * 150}ms`;

                    return {
                        ...square,
                        active: true,
                        opacity: Math.max(0.2, 0.5 - distance / interactionRadius),
                        color: colors[colorIndex],
                        transitionDelay: transDelay,
                        transitionDuration: transDuration
                    };
                } else {
                    // If it was previously active, give it a nice fade out transition
                    if (square.active) {
                        return {
                            ...square,
                            opacity: 0, // Fade to transparent
                            transitionDuration: '200ms', // Slightly longer fade-out time
                            // Don't set active: false immediately, let it fade out first
                        };
                    }
                    return {
                        ...square,
                        active: false,
                        opacity: 0
                    };
                }
            });
        });
    }, [cursorPosition, dimensions, squares.length, colors]); return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
        >
            {squares.map(square => {
                if (!square.active) return null;

                const cols = Math.ceil(dimensions.width / squareSize);
                const col = square.id % cols;
                const row = Math.floor(square.id / cols);
                return (
                    <div
                        key={square.id}
                        className="absolute"
                        style={{
                            position: 'absolute',
                            left: `${col * squareSize}px`,
                            top: `${row * squareSize}px`,
                            width: `${squareSize - 1}px`, // Slightly smaller to create grid lines
                            height: `${squareSize - 1}px`, // Slightly smaller to create grid lines
                            backgroundColor: square.color,
                            opacity: square.opacity,
                            transition: `opacity ${square.transitionDuration || '150ms'} ease-in-out, 
                          background-color ${square.transitionDuration || '150ms'} ease-in-out`,
                            transitionDelay: square.transitionDelay || '0ms',
                            border: '1px solid rgba(255, 255, 255, 0.4)', // Clearer outline for better visibility
                            boxShadow: 'inset 0 0 2px rgba(255, 255, 255, 0.3)', // Inner glow effect
                            boxSizing: 'border-box',
                            zIndex: -5
                        }}
                    />
                );
            })}
        </div>
    );
};

export default GlitchySquares;