import React from 'react';
import Editor from '@monaco-editor/react';
import { useStore } from 'zustand';
import useModalStore from '../../../store/useModalStore';

export default function CodeEditor({ height, language, theme }) {

    const { content, setContent } = useStore(useModalStore);

    const handleContentChange = (newContent) => {
        setContent(newContent)
    }

    return (
        <Editor
            height={height || "300px"}
            defaultLanguage={language}
            theme={theme || "vs-dark"}
            value={content}
            onChange={handleContentChange}
            options={{
                "accessibilitySupport": "auto",
                "acceptSuggestionOnEnter": true,
                "autoClosingBrackets": "always",
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
    )
}
