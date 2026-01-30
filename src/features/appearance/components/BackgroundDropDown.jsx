

const BackgroundDropDown = (BackgroundSetType, selectedBackground) => {
    return (
        <div className="absolute mt-12 w-50 rounded-md bg-transparent shadow-lg focus:outline-none overflow-y-auto max-h-60"
            role="listbox">
            {Object.entries(BackgroundSetType).map(([value, label]) => (
                <button
                    key={value}
                    type="button"
                    className="flex items-center justify-between flex-row text-sm border-b border-[#e4e4e7] hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0" style={{ border: value }}
                    onClick={() => handleOptionClick(value)}
                    role="option"
                    aria-selected={selectedBackground === value}
                >
                    <span className="ml-2 text-[15px]">{label}</span>
                    <div className={`self-end items-center justify-center rounded-sm text-sm w-5 h-5 ml-2`} style={{ backgroundColor: value, border: value === '#FFFFFF' ? '1px solid #e4e4e7' : 'none' }}></div>
                </button>
            ))}
        </div>
    );
}

export default BackgroundDropDown;
