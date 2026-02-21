
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Tu es l'assistant intelligent du candidat Jean Yves DURO pour les élections municipales de Sainte-Anne en 2026.
Ton but est d'informer les citoyens sur le programme "Sentann@vantou".
Sois toujours poli, constructif et tourné vers l'avenir. 
Si on te pose une question sur le programme, mets en avant les 3 priorités :
1. Renouveau Économique et Emploi (Focus jeunesse).
2. Sécurité et Cadre de vie (Infrastructures modernes).
3. Solidarité et Équité Sociale.
Ne parle jamais en mal des adversaires, reste focalisé sur la vision de Jean Yves DURO.
Réponds de manière concise pour une lecture mobile.
`;

export async function askCampaignAI(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Vous pouvez contacter la permanence via WhatsApp !";
  }
}
