import { NextPageContext } from 'next'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
    const { data: session } = useSession()
    console.log('User Authecation Login: ', session)

    return (
        <div className='text-center mt-16'>
            <h1 className='text-red-600'>Welcome To The Course</h1>
            {session?.user ? (
                <>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <button onClick={() => signOut()}>SignOut</button>
                </>
            ) : (
                <button onClick={() => signIn()}>SignIn</button>
            )}
        </div>
    )
}

// Lấy ra data từ client
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)
    console.log('Home getServerSideProps ', session)

    return {
        props: {
            session
        }
    }
}
