import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="relative flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img src="https://images.hdqwalls.com/wallpapers/ferrari-458-italia-red-2018-pd.jpg"  class="rounded-full h-28 w-28"/>
            </div>
        </div>
    );
}

export default Spinner;
