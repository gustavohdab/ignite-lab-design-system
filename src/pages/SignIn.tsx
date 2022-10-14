import { Checkbox } from '../components/Checkbox';
import { FormEvent, useState } from "react";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";


export function SignIn(){
    const [isUserSignIn, setIsUserSignIn] = useState(false)
    
    async function handleSignIn(event: FormEvent){
        event.preventDefault();

        await axios.post('/sessions',{
            email: 'gustavobatista@gmail.com',
            password: '3124213',
        })

        setIsUserSignIn (true)
    }


    return(
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
            <Logo />
            <Heading size='lg' className='mt-4'>
                Ignite Lab
            </Heading>
            <Text size='sm' className='text-gray-400 mt-2'>
                Log in and start using! 
            </Text>
        </header>

        <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        {isUserSignIn && <Text>Logged in successfully!</Text>}

        <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Email address</Text>
            <TextInput.Root>
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>

            <TextInput.Input id='email' placeholder='johndoe@exemple.com'/>
            </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Your password</Text>
            <TextInput.Root>
            <TextInput.Icon>
                <Lock />
            </TextInput.Icon>

            <TextInput.Input type="password" id='password' placeholder='********'/>
            </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Remember me for 30 days.</Text>
        </label>

        <Button type="submit" className='mt-4'>Enter the plataform</Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild size='sm'>
            <a href="#" className='text-gray-400 text underline hover:text-gray-200'>Forgot your password?</a>
            </Text>
            <Text asChild size='sm'>
            <a href="#" className='text-gray-400 text underline hover:text-gray-200'>Don't have  an account? Create now!</a>
            </Text>
        </footer>
    </div>
    )
}