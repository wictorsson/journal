import "./EntryForm.css";
export default function EntryForm() {
  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="title-input">Motto</label>
          <input></input>
        </fieldset>
        <fieldset>
          <label htmlFor="title-text">Notes</label>
          <textarea
            name="notes"
            id="notes"
            rows="4"
            cols="50"
            maxLength="150"
          ></textarea>
        </fieldset>
        <button type="submit" className="submitbutton">
          Create
        </button>
      </form>
    </div>
  );
}
