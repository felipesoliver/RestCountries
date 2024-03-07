import Cta from '~/src/components/cta'
 
export default function NotFound() {
  return (
    <main className='w-screen h-screen flex items-center justify-center flex-col gap-y-5'>
      <h2 className='text-2xl lg:text-5xl font-outfit font-light'>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Cta url="/" text='Return Home' blank={false} />
    </main>
  )
}