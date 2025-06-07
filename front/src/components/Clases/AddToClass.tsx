const AddToClass = () => {
    return (
        <form className="flex flex-col items-center justify-center">
            <input
                type="text"
                placeholder="DNI del alumno o tutor laboral"
                className="border border-gray-300 rounded p-2 mb-4"
            />
            <select
                className="border border-gray-300 rounded p-2 mb-4"
                defaultValue=""
            >
                <option value="" disabled>Clase a la que añadir</option>
                <option value="1">Clase 1</option>
                <option value="2">Clase 2</option>
                <option value="3">Clase 3</option>
            </select>
            <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
                Añadir a la clase
            </button>
        </form>
    )
}

export default AddToClass
