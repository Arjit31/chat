export default function Profile() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <img src="/images/logo.png" className="max-w-full max-h-96 bg-white" />
                <div className="w-full flex items-center justify-between p-4 border-t-2 border-black">
                    <label>Username:</label>
                    <input className="w-2/3 py-1 px-2" placeholder="Username"></input>
                </div>
                <div className="w-full flex items-center justify-between p-4">
                    <label>Name:</label>
                    <input className="w-2/3 py-1 px-2" placeholder="Name"></input>
                </div>
                <button>Edit</button>
            </div>
        </div>
    )
}
