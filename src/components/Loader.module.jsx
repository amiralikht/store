import { ThreeDots } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='w-[90vw] text-center h-[100vh] flex justify-center items-center'>
        <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="var(--primary_color)"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
    
  )
}

export default Loader