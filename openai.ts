import OpenAI from 'openai';


// const configuration = new Configuration ({
//     apiKey: process.env.OPEN_API_KEY,
// })

// const openai = new OpenAI(configuration);


const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});

export default openai