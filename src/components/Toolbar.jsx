import PropTypes from "prop-types";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div style={{ marginBottom: "16px" }}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setHighlight({ color: "yellow" }).run()
        }
        disabled={
          !editor.can().chain().focus().setHighlight({ color: "yellow" }).run()
        }
      >
        Highlight
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertCustomButton({ href: "https://example.com", text: "Visit" })
            .run()
        }
      >
        Insert Button
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  editor: PropTypes.object,
};

export default Toolbar;
