import { NextPageContext } from 'next'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'

export default function Home() {
    const { data: session } = useSession()
    console.log('User Authecation Login: ', session)

    return (
        <>
            <h1 className='text-red-600'>Welcome To The Course</h1>
            {session?.user ? (
                <>
                    <button onClick={() => signOut()}>SignOut</button>
                    <p>Name: {session.user.name}</p>
                    <img
                        src={session?.user?.image}
                        alt='avatar'
                        className='w-[128px] h-32 rounded-full'
                    />
                </>
            ) : (
                <button onClick={() => signIn()}>SignIn</button>
            )}
        </>
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
