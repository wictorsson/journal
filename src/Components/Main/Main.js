import "./Main.css";
import EntryForm from "./EntryForm/EntryForm";
import EntriesSection from "./EntriesSection/EntriesSection";
export default function Main() {
  return (
    <div>
      <h3>NEW ENTRY</h3>
      <EntryForm></EntryForm>
      <EntriesSection></EntriesSection>
    </div>
  );
}
