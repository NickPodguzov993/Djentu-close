import Wrapper from "./components/Wrapper";
import LogoSvg from "./components/LogoSvg";

function App() {
    return (
        // Wrapper нужно стилизовать в соответствии с требованиями
        <Wrapper>
            <div className='p-4 flex'>
                <div className='w-auto h-auto mr-[190px] sm:mr-[1050px]'>
                    <LogoSvg/>
                </div>
            </div>
            <div className=' bg-main bg-cover sm:w-full w-[360px] sm:h-[900px] rounded-xl'>
                <div className=' sm:w-[1000px] h-[500px] bg-black m-auto sm:mt-[100px] opacity-70 rounded-xl'>
<h1 className='text-white p-6 text-[48px]'>Заголовок</h1>
                    <p className='text-white p-6 text-[24px]'>
                        lorem ipsum
                    </p>
                </div>

            </div>

        </Wrapper>
    )
}

export default App
