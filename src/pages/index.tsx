import { NextPageContext } from 'next'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import Image from 'next/image'

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
                    <Image
                        src={session?.user?.image as string}
                        alt='avatar'
                        className='w-[128px] h-32 rounded-full'
                    />
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
