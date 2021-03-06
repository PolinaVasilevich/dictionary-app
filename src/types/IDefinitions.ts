interface IPhonetic {
  text: string;
  audio: string;
}

interface IDefinition {
  definition: string;
  example?: string;
}

interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export default interface IDefinitions {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}
