import { useState, useRef, useEffect } from "react";
import Editor from '@monaco-editor/react';
import { toPng } from 'html-to-image';

const CodeDisplay = ({ getBackground, getLanguage, getTheme, headerBackground, fileType, fileName, code, updateCode, ExportImage, resetExportImage }) => {

    console.log({ getBackground, getLanguage, getTheme, headerBackground, fileType })
    const editorRef = useRef(null);
    const ImageRef = useRef(null);
    const [editorHeight, setEditorHeight] = useState('300px');
    const [showVerticalScrollbar, setShowVerticalScrollbar] = useState('hidden');
    const [showHorizontalScrollbar, setShowHorizontalScrollbar] = useState('hidden');
    const [editorWidth, setEditorWidth] = useState('480px'); // 65%
    const MAX_EDITOR_HEIGHT = 320; // Define max height in pixels
    const MAX_EDITOR_WEIGHT = 635;

    // Removed hardcoded snippets - now using code prop from App.jsx
    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

        // Set initial height based on content
        const updateEditorHeight = () => {
            const contentHeight = editor.getContentHeight();
            if (contentHeight > MAX_EDITOR_HEIGHT) {
                setEditorHeight(`${MAX_EDITOR_HEIGHT}px`);
                setShowVerticalScrollbar('visible');
            } else {
                setEditorHeight(`${contentHeight}px`);
                setShowVerticalScrollbar('hidden');
            }
        }
        // Listen for content size changes and update height
        updateEditorHeight()
        editor.onDidContentSizeChange(updateEditorHeight);

        const updateEditorWidth = () => {
            // Get the scroll width of the editor's content
            // This is the width needed to display all content without horizontal scroll
            const contentScrollWidth = editor.getScrollWidth();

            // Monaco Editor adds some internal padding/margins.
            // You'll need to experiment with these values.
            // A common approach is to add a fixed padding.
            const horizontalPadding = 30; // Example: 50px for left/right padding

            // Calculate the desired total width
            const newWidth = contentScrollWidth + horizontalPadding;

            // Set a minimum width to ensure the editor doesn't become too small
            const minWidth = 400; // Example: 400px minimum width


            // Update the state
            const newEditorWidth = setEditorWidth(`${Math.max(newWidth, minWidth)}px`);
            if (newEditorWidth >= MAX_EDITOR_WEIGHT) {
                setEditorHeight(`${MAX_EDITOR_WEIGHT}px`);
                setShowHorizontalScrollbar('visible');
            }
            console.log(editor.getContentWidth());
        };

        updateEditorWidth(); // Set initial width
        // Listen for content size changes. This event also fires for width changes.
        editor.onDidContentSizeChange(updateEditorWidth);
    }


    const downloadImage = async () => {
        if (ExportImage && ImageRef.current){
            toPng(ImageRef.current, { cacheBust: true })
                .then((imageUrl) => {
                    const link = document.createElement('a');
                    link.download = `${fileName}.png`;
                    link.href = imageUrl;
                    link.click();

                    // Call the reset of the ExportImage state
                })
                .catch((error) => {
                    console.error('Export failed', error);
                    // Add alert div here (later on)?
                })
        resetExportImage();
        }
    }

    useEffect(() => {
        downloadImage();
        }, [ExportImage, resetExportImage]);

    return (
        <div ref={ImageRef} className={`flex items-center justify-center w-[737.99px] h-[450px] m-10 mx-10 mt-20 mb-5`} style={{ background: getBackground }}>
            <div ref={ImageRef} style={{ width: editorWidth, background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                {/* macOS Window Header */}
                <div style={{
                    background: headerBackground, // background of the theme
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
                    }} />
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
                    <div style={{ flex: 1, textAlign: 'center', color: '#888', fontSize: '14px', fontFamily: 'monospace' }}>
                        {fileName}{fileType}
                    </div>
                </div>
                <Editor className={'hover:border-dotted hover:border-gray-500 rounded-xl'} height={editorHeight}
                    width="100%"
                    language={getLanguage}
                    theme={getTheme}
                    value={code}
                    onChange={(value) => updateCode(value)}
                    onMount={handleEditorDidMount}
                    options={{
                        // Remove IDE features
                        minimap: { enabled: false },           // No minimap
                        scrollBeyondLastLine: false,           // No extra scroll space
                        lineNumbers: 'on',                    // Hide line numbers (or keep 'on')
                        glyphMargin: true,                    // No glyph margin (breakpoints area)
                        folding: true,                        // No code folding arrows
                        lineDecorationsWidth: 1,               // No left decorations space
                        lineNumbersMinChars: 2,                // Minimal line number space

                        // Clean appearance
                        renderLineHighlight: 'none',           // No line highlighting
                        overviewRulerBorder: false,            // No border on scrollbar
                        hideCursorInOverviewRuler: true,       // Hide cursor in scrollbar

                        // Padding for snippet look
                        padding: { top: 16, bottom: 16 },      // Space around code

                        wordWrap: 'off',
                        // Simple scrollbar
                        scrollbar: {
                            vertical: showVerticalScrollbar,                  // Hide vertical scrollbar
                            horizontal: showHorizontalScrollbar,                // Hide horizontal scrollbar
                            alwaysConsumeMouseWheel: false
                        },
                        fontFamily: 'jetbrains mono',
                        fontSize: 13,
                        wordBasedSuggestions: 'off', // Or false
                        quickSuggestions: {
                            other: false,
                            comments: false,
                            strings: false,
                        },
                        suggestOnTriggerCharacters: false,
                        acceptSuggestionOnEnter: 'off',
                        parameterHints: {
                            enabled: false
                        }
                    }}
                />
            </div>
        </div>

    );
}

export default CodeDisplay