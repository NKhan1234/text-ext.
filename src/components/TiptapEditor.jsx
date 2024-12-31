import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import { CustomButton } from "../extensions/CustomButton";
import Toolbar from "./Toolbar";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      CustomButton,
    ],
    content: `<p>Welcome to Tiptap extension.</p>`,
  });

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
