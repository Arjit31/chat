
export async function varify(email: string){
    const res = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ email, subject: 'Varification Code' }),
    });
    const data = await res.json();

    if (data.success) {
        return true;
    } else {
        return false;
    }
}