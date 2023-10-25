import { OpenAI } from "openai";
import type { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const prompt = req.body.message;
            const response = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: prompt,
                max_tokens: 150
            });

            res.status(200).json({ message: response.choices[0].text.trim() });
        } catch (error) {
            res.status(500).json({ error: "Erro ao comunicar com OpenAI" });
        }
    } else {
        res.status(405).end(); // Método não permitido se não for POST.
    }
};
