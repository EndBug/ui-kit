import os from 'os';
import path from 'path';
import shelljs from 'shelljs';
import vfile from 'vfile';
import { transformDocument } from '../src';

const tmpFolder = os.tmpdir();
const testPackages = path.join(tmpFolder, 'packages');

beforeAll(() => {
  shelljs.mkdir('-p', testPackages);
  shelljs.cp('-R', path.join(__dirname, 'fixtures/avenger'), testPackages);
  shelljs.cp(
    '-R',
    path.join(__dirname, 'fixtures/justice-league'),
    testPackages
  );
});

describe('generate README (for JS file)', () => {
  it('should generate README based on package info', async () => {
    const file = await transformDocument(
      vfile(),
      path.join(testPackages, 'avenger')
    );
    const content = file.toString();
    expect(content).toMatchInlineSnapshot(`
"<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->
<!-- This file is created by the \`yarn generate-readme\` script. -->

# Avenger

## Description

Render an Avenger

## Installation

\`\`\`
yarn add @commercetools-test/avenger
\`\`\`

\`\`\`
npm --save install @commercetools-test/avenger
\`\`\`

Additionally install the peer dependencies (if not present)

\`\`\`
yarn add react
\`\`\`

\`\`\`
npm --save install react
\`\`\`

## Usage

\`\`\`jsx
import Avenger from '@commercetools-uikit/avenger';

const Example = () => <Avenger name=\\"Dr. Strange\\" />;

export default Example;

\`\`\`

## Properties

| Props | Type | Required | Default | Description |
| - | - | :-: | - | - |
| \`name\` | \`string\` | ✅ | | The name of an Avenger. |
| \`identity\` | \`object\` | | | The real identity of this Avenger, if known. |
| \`identity.firstName\` | \`string\` | | | |
| \`identity.lastName\` | \`string\` | | | |
| \`identity.age\` | \`number\` | | | |
| \`onClick\` | \`func\` | | | A callback function, called when the component is clicked.&#xA;<br>&#xA;Signature: \`(event) => void\` |
| \`abilities\` | \`array\` | ✅ | | List the abilities of this Avenger. |
| \`abilities[].name\` | \`string\` | ✅ | | The name of the ability. |
| \`abilities[].description\` | \`string\` | | | |
| \`abilities[].isNew\` | \`bool\` | | \`false\` | Set this to \`true\` to mark this ability as new. |
| \`movies\` | \`array\` | ✅ | | The list of movies where this Avenger appears in.&#xA;It can either be just the name of the movie or a more detailed&#xA;information about the movie. |
| \`movies[]<string>\` | \`string\` | | | The name of the movie. |
| \`movies[]<shape>\` | \`object\` | | | Detailed information about the movie. |
| \`movies[]<shape>.title\` | \`string\` | ✅ | | The title of the movie. |
| \`movies[]<shape>.releaseDate\` | \`string\` | ✅ | | The release date of the movie (ISO). |
| \`power\` | \`enum\`<br/>Possible values:<br/>\`1, 2, 3, 4, 5, 6, 7, 8, 9, 10\` | | \`1\` | Define the power for this Avenger, from a scale of 1-10. |
| \`isAlive\` | \`bool\` | | \`true\` | |

## More information

This section should come AFTER the \\"Properties\\".
"
`);
  }, 10000);
});

describe('generate README (for TS file)', () => {
  it('should generate README based on package info', async () => {
    const file = await transformDocument(
      vfile(),
      path.join(testPackages, 'justice-league')
    );
    const content = file.toString();
    expect(content).toMatchInlineSnapshot(`
"<!-- THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. -->
<!-- This file is created by the \`yarn generate-readme\` script. -->

# JusticeLeague

## Description

Render an Justice League

## Installation

\`\`\`
yarn add @commercetools-test/justice-league
\`\`\`

\`\`\`
npm --save install @commercetools-test/justice-league
\`\`\`

Additionally install the peer dependencies (if not present)

\`\`\`
yarn add react
\`\`\`

\`\`\`
npm --save install react
\`\`\`

## Usage

\`\`\`jsx
import JusticeLeague from '@commercetools-uikit/justice-league';

const Example = () => <JusticeLeague name=\\"Batman\\" />;

export default Example;

\`\`\`

## Properties

| Props | Type | Required | Default | Description |
| - | - | :-: | - | - |
| \`name\` | \`string\` | ✅ | | The name of an Avenger. |
| \`identity\` | \`Object\`<br/>[See signature.](#signature-identity) | ✅ | | The real identity of this Avenger, if known. |
| \`onClick\` | \`Function\`<br/>[See signature.](#signature-onClick) | | | A callback function, called when the component is clicked. |
| \`abilities\` | \`Array: Ability[]\`<br/>[See signature.](#signature-abilities) | ✅ | | List the abilities of this Avenger. |
| \`movies\` | \`union\`<br/>Possible values:<br/>\`string , Movie\`<br/>[See signature.](#signature-movies) | ✅ | | The list of movies where this Avenger appears in.&#xA;It can either be just the name of the movie or a more detailed&#xA;information about the movie. |
| \`power\` | \`union\`<br/>Possible values:<br/>\`1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10\` | | \`1\` | Define the power for this Avenger, from a scale of 1-10. |
| \`isAlive\` | \`boolean\` | | \`true\` | |

## Signatures

### Signature \`identity\`

\`\`\`ts
{
  /**
   * The name of the Avenger.
   */
  firstName?: string;
  lastName?: string;
  age?: number;
}
\`\`\`

### Signature \`onClick\`

\`\`\`ts
(event: Event) => void
\`\`\`

### Signature \`abilities\`

\`\`\`ts
{
  /**
   * The name of the ability.
   */
  name: string;
  description?: string;
  /**
   * Set this to \`true\` to mark this ability as new.
   *
   * @@defaultValue@@: false
   */
  isNew?: boolean;
}
\`\`\`

### Signature \`movies\`

\`\`\`ts
{
  /**
   * The title of the movie.
   */
  title: string;
  /**
   * The release date of the movie (ISO).
   */
  releaseDate: string;
}
\`\`\`
"
`);
  }, 10000);
});
