import img from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className="w-full bg-center my-20 bg-cover h-[25rem]" style={{ backgroundImage: `url(${img})` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center bg-white w-2/3 md:p-12 p-6">
                <h2 className='lg:text-4xl text-2xl text-black uppercase'>bistro boss</h2>
                <p className='text-black mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, modi earum! Odio amet fugiat corporis voluptatum consectetur quod tempore, totam, inventore accusantium officia, dolore dolorum! Dolor nesciunt delectus cum quo!</p>
            </div>
        </div>
    </div>
    );
};

export default BistroBoss;