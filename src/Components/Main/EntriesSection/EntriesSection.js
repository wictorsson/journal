import TabBar from "./TabBar/TabBar";
import EntryList from "./EntryList/EntryList";
import "./EntriesSection.css";
export default function EntriesSection() {
  return (
    <>
      <TabBar />
      <EntryList />
      <EntryList />
      <EntryList />
    </>
  );
}
