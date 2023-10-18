import { sourceToQuiz } from "./parser";
import { describe, expect, it, test } from "@jest/globals";

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
		// ハイフンの数が4つ以上の場合も分割できる
		{
			"source": "What is the capital of France?\n----\nParis",
			"expected": {
				"question": "What is the capital of France?",
				"answer": "Paris"
			},
		}
	]

	test.each(cases)("正常系 %p", (c) => {
		const actual = sourceToQuiz(c.source);
		expect(actual).toEqual(c.expected);
	});
});

