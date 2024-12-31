import { Node } from "@tiptap/core";

export const CustomButton = Node.create({
  name: "customButton",

  group: "inline",

  inline: true,

  atom: true,

  addAttributes() {
    return {
      href: { default: null },
      text: { default: "Click me" },
    };
  },

  parseHTML() {
    return [
      {
        tag: "button[data-custom-button]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "button",
      { ...HTMLAttributes, "data-custom-button": true },
      HTMLAttributes.text,
    ];
  },

  addCommands() {
    return {
      insertCustomButton:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default CustomButton;
