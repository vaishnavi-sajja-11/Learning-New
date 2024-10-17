

export default function Button({title,...props}){

    return (
        <>
            <button {...props} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" >{title}</button>
        </>
    );

}