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
    const [dataPoints] = useState<DataPoint[]>([
        { x: 9, y: 9, text: 'JME<br>Roblox Tycoon Game<br>1M+ visits', marker: { color: '#ff6b6b', size: 15 } },
        { x: 8, y: 7, text: 'Monsters Awakening<br>Dungeon RPG Game', marker: { color: '#4ecdc4', size: 12 } },
        { x: 7, y: 8, text: 'AlyaNum<br>High-Performance Big Number Lua Library', marker: { color: '#45b7d1', size: 12 } },
        { x: 4, y: 8, text: 'SerikaNum<br>High-Performance Big Number Lua Library', marker: { color: '#ffffff', size: 12 } },
        { x: 7, y: 6, text: 'thenilworld<br>Open-World RPG (In Development)', marker: { color: '#96ceb4', size: 10 } },
        { x: 6, y: 6, text: 'Portfolio Website<br>You are here!', marker: { color: '#ffeaa7', size: 11 } },
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
        };

        const config = {
            responsive: true,
            displayModeBar: false,
            doubleClick: 'reset'
        };

        Plotly.newPlot(plotRef.current, [trace], layout, config);
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
            </p>
        </div>
    );
};

export default PassionEffortPlot;