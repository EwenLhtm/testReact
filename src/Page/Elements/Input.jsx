export function Input ({value, placeholder, onChange, onKeyDown,count,maxLength}) {

    return <div>
        <input 
            className="fr-input"
            value={value}
            placeholder={placeholder}
            onChange={(e)=>onChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    onKeyDown(e.target.value,count)
                }
            }}
            maxLength={maxLength}
        />
    </div>
}