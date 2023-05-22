import React from 'react';
import Editor from '@monaco-editor/react';

export default function CodeEditor({ height, language, theme, content, handleContentChange }) {
    return (
        <>
            <Editor
                height={height || "300px"}
                defaultLanguage={language}
                theme={theme || "vs-dark"}
                defaultvalue={content || ""}
                onChange={handleContentChange}
                options={{
                    "accessibilitySupport": "auto",
                    "acceptSuggestionOnEnter": true,
                    "autoClosingBrackets": "always",
                    "autoClosingQuotes": "always",
                    "autoCompleteOnEnter": true,
                    "automaticLayout": true,
                    "autoIndent": true,
                    "bracketPairColorization": true,
                    "codeLens": true,
                    "cursorBlinking": "blink",
                    "cursorStyle": "line",
                    "folding": true,
                    "formatOnType": true,
                    "multiCursorModifier": "alt",
                    "scrollBeyondLastLine": false,
                    "smoothscrolling": true,
                    "wordBasedSuggestions": true,
                    "wordWrap": "on"
                }}
            />
        </>
    )
}
