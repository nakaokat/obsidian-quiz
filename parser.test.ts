import { sourceToQuiz } from "./parser";
import { describe, expect, it } from "@jest/globals";

describe("sourceToQuiz", () => {
	const cases = [
		// ---(ハイフン3つ)で分割できる
		{
			"source": "What is the capital of France?\n---\nParis",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
			"comment": "改行と---で分割できる"
		},
		{
			"source": "What is the capital of France?\n---\nParis\n---\n",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
			"comment": "---で終わってもOK"
		},
	]

	it("正常系", () => {
		cases.forEach(c => {
			const actual = sourceToQuiz(c.source);
			expect(actual).toEqual(c.expected);
		});
	});
});

