import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function LogDetails({entry,open,onClose}){
    console.log('log details rendering' +entry);
    return(
        <Modal open={open} onClose={onClose}>
                <Input id="entrydate" label="Date" type="date" value={entry.date} />
                <Input id="mistakes" label="Mistakes" type="textarea" value={entry.mistake}  />
                <Input id="lessons" label="Lessons" type="textarea" value={entry.lesson}/>
                <button type="submit" >Close</button>
                <button >Update</button>
        </Modal>
    )
}