import { useRef, useState, useEffect } from 'react';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight, FaUndo, FaRedo } from 'react-icons/fa';
import { MdFormatColorText, MdAdd, MdRemove } from 'react-icons/md';

const RichTextEditor = ({ content = '', onContentChange }) => {
  const editorRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);

  // Initialize editor
  useEffect(() => {
    if (editorRef.current && content) {
      editorRef.current.innerHTML = content;
    }

    const handleInput = () => {
      if (onContentChange) {
        onContentChange(editorRef.current.innerHTML);
      }
      checkUndoRedo();
    };

    const checkUndoRedo = () => {
      setCanUndo(document.queryCommandEnabled('undo'));
      setCanRedo(document.queryCommandEnabled('redo'));
    };

    const handleClickOutside = (e) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) {
        setShowColorPicker(false);
      }
    };

    const editor = editorRef.current;
    editor?.addEventListener('input', handleInput);
    editor?.addEventListener('keyup', checkUndoRedo);
    editor?.addEventListener('mouseup', checkUndoRedo);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      editor?.removeEventListener('input', handleInput);
      editor?.removeEventListener('keyup', checkUndoRedo);
      editor?.removeEventListener('mouseup', checkUndoRedo);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [content, onContentChange]);

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    checkUndoRedo();
  };

  const changeFontSize = (increase) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    if (!selectedText) return; // No text selected

    // Get current font size or use default (16px)
    const currentSize = parseInt(
      window.getComputedStyle(range.startContainer.parentElement).fontSize || '16'
    );

    const newSize = increase ? currentSize + 2 : Math.max(currentSize - 2, 10);
    
    // Create span with new font size
    const span = document.createElement('span');
    span.style.fontSize = `${newSize}px`;
    
    // Apply to selected text
    range.surroundContents(span);
    
    // Clear any empty spans that might have been created
    const emptySpans = editorRef.current.querySelectorAll('span:empty');
    emptySpans.forEach(span => {
      if (span.parentNode) {
        span.parentNode.removeChild(span);
      }
    });

    editorRef.current.focus();
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    execCommand('foreColor', color);
    setShowColorPicker(false);
  };

  const ToolbarButton = ({ onClick, children, title, disabled = false, active = false }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`p-2 rounded hover:bg-gray-100 flex items-center justify-center ${
        active ? 'bg-gray-200' : ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50">
        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton onClick={() => execCommand('undo')} title="Undo" disabled={!canUndo}>
            <FaUndo size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('redo')} title="Redo" disabled={!canRedo}>
            <FaRedo size={16} />
          </ToolbarButton>
        </div>

        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton onClick={() => execCommand('bold')} title="Bold">
            <FaBold size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('italic')} title="Italic">
            <FaItalic size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('underline')} title="Underline">
            <FaUnderline size={16} />
          </ToolbarButton>
        </div>

        <div className="flex border-r pr-2 mr-2 relative">
          <ToolbarButton 
            onClick={() => setShowColorPicker(!showColorPicker)} 
            title="Text Color" 
            active={showColorPicker}
          >
            <MdFormatColorText size={18} />
          </ToolbarButton>
          {showColorPicker && (
            <div ref={colorPickerRef} className="absolute left-0 top-10 z-10 bg-white p-2 shadow-lg rounded border">
              <input
                type="color"
                onChange={handleColorChange}
                className="w-8 h-8 cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setShowColorPicker(false)}
                className="w-full mt-2 text-xs px-2 py-1 bg-gray-100 rounded flex justify-center"
              >
                Close
              </button>
            </div>
          )}
        </div>

        <div className="flex border-r pr-2 mr-2">
          <ToolbarButton onClick={() => execCommand('justifyLeft')} title="Align Left">
            <FaAlignLeft size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('justifyCenter')} title="Align Center">
            <FaAlignCenter size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand('justifyRight')} title="Align Right">
            <FaAlignRight size={16} />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1">
          <ToolbarButton 
            onClick={() => changeFontSize(false)} 
            title="Decrease Font Size"
          >
            <MdRemove size={18} />
          </ToolbarButton>
          <ToolbarButton 
            onClick={() => changeFontSize(true)} 
            title="Increase Font Size"
          >
            <MdAdd size={18} />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        className="w-full p-4 min-h-[300px] max-h-[500px] overflow-y-auto focus:outline-none"
        style={{ lineHeight: '1.6' }}
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData('text/plain');
          document.execCommand('insertText', false, text);
        }}
      />
    </div>
  );
};

export default RichTextEditor;