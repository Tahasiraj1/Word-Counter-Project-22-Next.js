"use client";
import React, { useState, ChangeEvent } from "react";
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function WordCounter() {
    const [text, setText] = useState<string>("");

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const clearText = () => {
        setText("");
    };

    const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

    const charCount = text.length;

    return(
        <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-br from-teal-200 via-cyan-300 to-emerald-400 p-4 sm:p-8">
            <Card className="w-full max-w-md rounded-2xl bg-gradient-to-br from-teal-50 via-cyan-200 to-emerald-100">
                <CardHeader className="text-center justify-center flex flex-col">
                    <CardTitle>Text Analysis</CardTitle>
                    <CardDescription>
                        Enter text and see the word and character count.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Textarea for input text */}
                    <Textarea
                    id="text-input"
                    placeholder="Enter your text here.."
                    className="h-32 resize-none rounded-xl"
                    value={text}
                    onChange={handleTextChange}
                    />
                    {/* Display word and character count */}
                    <div className="flex items-center justify-between">
                        <div className="text-am text-muted-foreground">
                            <span id="word-count">{wordCount}</span> words, {""}
                            <span id="char-count">{charCount}</span> characters
                        </div>
                        {/* Button to clear the input text */}
                        <Button
                        className="rounded-full bg-teal-700 hover:bg-teal-600 active:bg-teal-500 active:scale-95 transition-transform transform duration-300" 
                        onClick={clearText}>Clear</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}