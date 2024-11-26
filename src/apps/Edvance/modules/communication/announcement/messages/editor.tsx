import { Editor } from "primereact/editor";

export default function EditorScreen({ value, onTextChange }) {
  return (
    <div className=" w-full">
      <div className="overall__message__head mb-2">
        Message<span style={{ color: 'red' }}>*</span>
      </div>
      <Editor
        value={value}
        onTextChange={onTextChange}
        style={{ height: "320px" }}
        maxLength={1000}
      />
    </div>
  );
}
