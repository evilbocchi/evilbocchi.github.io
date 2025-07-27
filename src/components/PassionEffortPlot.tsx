import { useEffect, useRef, useState, useCallback } from 'react';
// @ts-expect-error - plotly.js-dist-min doesn't have types
import Plotly from 'plotly.js-dist-min';

interface DataPoint {
    x: number;
    y: number;
    text: string;
    marker?: {
        color: string;
        size: number;
    };
}

const PassionEffortPlot = () => {
    const plotRef = useRef<HTMLDivElement>(null);
    const [dataPoints, setDataPoints] = useState<DataPoint[]>([
        { x: 9, y: 10, text: 'JME<br>Roblox Tycoon Game<br>1M+ visits', marker: { color: '#ff6b6b', size: 15 } },
        { x: 8, y: 7, text: 'Monsters Awakening<br>Dungeon RPG Game', marker: { color: '#4ecdc4', size: 12 } },
        { x: 7, y: 9, text: 'AlyaNum<br>High-Performance Lua Library', marker: { color: '#45b7d1', size: 12 } },
        { x: 8, y: 6, text: 'thenilworld<br>Open-World RPG (In Development)', marker: { color: '#96ceb4', size: 10 } },
        { x: 6, y: 8, text: 'Portfolio Website<br>You are here!', marker: { color: '#ffeaa7', size: 11 } },
    ]);

    const initializePlot = useCallback(() => {
        if (!plotRef.current) return;

        const trace = {
            x: dataPoints.map(point => point.x),
            y: dataPoints.map(point => point.y),
            mode: 'markers',
            type: 'scatter',
            text: dataPoints.map(point => point.text),
            hovertemplate: '<b>%{text}</b><br>Passion: %{x}<br>Effort: %{y}<extra></extra>',
            marker: {
                size: dataPoints.map(point => point.marker?.size || 10),
                color: dataPoints.map(point => point.marker?.color || '#ddd6fe'),
                opacity: 0.8,
                line: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    width: 2
                }
            }
        };

        const layout = {
            title: {
                text: 'Project Portfolio: Passion vs Effort',
                font: {
                    color: '#ffffff',
                    size: 20,
                    family: 'ui-sans-serif, system-ui, sans-serif'
                }
            },
            xaxis: {
                title: {
                    text: 'Passion Level',
                    font: { color: '#ffffff', size: 14 }
                },
                range: [0, 10],
                gridcolor: 'rgba(255, 255, 255, 0.2)',
                tickcolor: '#ffffff',
                tickfont: { color: '#ffffff' },
                linecolor: 'rgba(255, 255, 255, 0.3)'
            },
            yaxis: {
                title: {
                    text: 'Effort Investment',
                    font: { color: '#ffffff', size: 14 }
                },
                range: [0, 10],
                gridcolor: 'rgba(255, 255, 255, 0.2)',
                tickcolor: '#ffffff',
                tickfont: { color: '#ffffff' },
                linecolor: 'rgba(255, 255, 255, 0.3)'
            },
            plot_bgcolor: 'rgba(0, 0, 0, 0.3)',
            paper_bgcolor: 'rgba(0, 0, 0, 0.1)',
            font: {
                color: '#ffffff'
            },
            margin: { t: 60, r: 40, b: 60, l: 60 },
            annotations: [
                {
                    x: 8.5,
                    y: 1,
                    text: 'Click to add your own project!',
                    showarrow: false,
                    font: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        size: 12
                    }
                }
            ]
        };

        const config = {
            responsive: true,
            displayModeBar: false,
            doubleClick: 'reset'
        };

        Plotly.newPlot(plotRef.current, [trace], layout, config);

        // Add click event listener for adding new points
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (plotRef.current as any).on('plotly_click', (data: { points: Array<{ x: number; y: number }> }) => {
            const clickX = data.points[0].x;
            const clickY = data.points[0].y;
            
            const projectName = prompt('Enter project name:');
            if (projectName) {
                const newPoint: DataPoint = {
                    x: Math.round(clickX * 10) / 10,
                    y: Math.round(clickY * 10) / 10,
                    text: `${projectName}<br>Your Project`,
                    marker: { 
                        color: '#ddd6fe', 
                        size: 10 
                    }
                };
                
                setDataPoints(prev => [...prev, newPoint]);
            }
        });
    }, [dataPoints]);

    useEffect(() => {
        initializePlot();
    }, [initializePlot]);

    useEffect(() => {
        const handleResize = () => {
            if (plotRef.current) {
                Plotly.Plots.resize(plotRef.current);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full">
            <div 
                ref={plotRef} 
                className="w-full h-96 rounded-lg"
                style={{ minHeight: '400px' }}
            />
            <p className="text-sm text-gray-400 mt-4 text-center">
                Interactive scatter plot showing the relationship between passion and effort in my projects.
                <br />
                <span className="text-xs">Click anywhere on the plot to add your own project point!</span>
            </p>
        </div>
    );
};

export default PassionEffortPlot;