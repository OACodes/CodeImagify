import { useState } from "react";
import { useEffect } from "react";
import Editor from '@monaco-editor/react';

const CodeDisplay = ({ getBackground, getLanguage, getTheme }) => {
    console.log({ getBackground, getLanguage, getTheme })
    const [code, setCode] = useState(`function myFunction() {
    // This is a comment
    console.log("Hello World");
}`);

    // useEffect({

    // },[])
    
    // Optimzation Issue: Slow and takes sometime to load the code editor. use the useEffect or something else to allow the
    //  the browser to save first.
    //  LocalStorage: Find a way to store the code when refreshed up until they export

    return (
        <div className={`flex items-center justify-center w-[40rem] h-[400px] m-10 mx-10 mt-20`} style={{ backgroundColor: getBackground }}>
            <div style={{ width:"80%", background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'}}>
            {/* macOS Window Header */}
            <div style={{
                background: getBackground, // background of the theme
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                {/* Three dots */}
                <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ff5f56'
                }}/>
                <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#ffbd2e'
                }} />
                <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#27c93f'
                }} />
                
                {/* Filename in center */}
                <div style={{ flex: 1, textAlign: 'center', color: '#888', fontSize: '14px', fontFamily: 'monospace'}}>
                    hello-world.js
                </div>
            </div>
            <Editor className={'hover:border-dotted hover:border-gray-500 rounded-xl'} height="200px"
            width="100%"
            language={getLanguage}
            theme={getTheme}
            value={code}
            onChange={(value) => setCode(value)}
            options={{
                // Remove IDE features
                minimap: { enabled: false },           // No minimap
                scrollBeyondLastLine: false,           // No extra scroll space
                lineNumbers: 'on',                    // Hide line numbers (or keep 'on')
                glyphMargin: true,                    // No glyph margin (breakpoints area)
                folding: true ,                        // No code folding arrows
                lineDecorationsWidth: 1,               // No left decorations space
                lineNumbersMinChars: 2,                // Minimal line number space
                
                // Clean appearance
                renderLineHighlight: 'none',           // No line highlighting
                overviewRulerBorder: false,            // No border on scrollbar
                hideCursorInOverviewRuler: true,       // Hide cursor in scrollbar
                
                // Padding for snippet look
                padding: { top: 16, bottom: 16 },      // Space around code
                
                // Simple scrollbar
                scrollbar: {
                    vertical: 'hidden',                  // Hide vertical scrollbar
                    horizontal: 'hidden',                // Hide horizontal scrollbar
                    alwaysConsumeMouseWheel: false
                },

                fontFamily: 'jetbrains mono',

                fontSize: 16
            }}
            />
            </div>
        </div>
        
    );
}

export default CodeDisplay