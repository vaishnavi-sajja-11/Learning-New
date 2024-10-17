import Input from './Input.jsx';

export default function UserInput(){
    return(
        <div className="Todo-entries">
                <Input id="entrydate" label="Date" type="date" ref={date} />
                <Input id="mistakes" label="Mistakes" type="textarea" ref={mistake} />
                <Input id="lessons" label="Lessons" type="textarea" ref={lesson} />
                <button type="submit" onClick={handleOnclick}>Enter</button>
                <button onClick={onClear}>clear</button>
        </div>
    );
}