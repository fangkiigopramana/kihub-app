export default function ItemList(params) {
    return (
        <>
            <li class="mb-10 ml-6 lg:w-[500px] md:w-[300px] sm:w-[100px]">
                <div class="absolute w-4 h-4 bg-white border-4 {{ params.category === 'education' ? 'border-indigo-600' : 'border-yellow-600' }} rounded-full -left-[0.6rem]"></div>
                <p class="text-2xl text-primary font-bold">{params.title}</p>
                <p class="font-semibold text-gray-400">{params.duration}</p>
                <p className='text-gray-300 font-bold'>
                   {params.description}
                </p>
            </li>
        </>
    );
};
