import { convert } from '../../src';

it('render text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render bold text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'bold',
          marks: [
            {
              object: 'mark',
              type: 'bold',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render italic text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'italic',
          marks: [
            {
              object: 'mark',
              type: 'italic',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render underlined text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'underlined',
          marks: [
            {
              object: 'mark',
              type: 'underlined',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render all marks text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'bold, italic, underlined',
          marks: [
            {
              object: 'mark',
              type: 'bold',
              data: {},
            },
            {
              object: 'mark',
              type: 'italic',
              data: {},
            },
            {
              object: 'mark',
              type: 'underlined',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render code text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'code',
          marks: [
            {
              object: 'mark',
              type: 'code',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

/**
 * slate < 0.46
 */

it('render slate < 0.46 text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Hello',
              marks: [],
            },
          ],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('merge slate < 0.46 text with mark', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Of course, you can edit your text at any moment and make it ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'bold',
              marks: [
                {
                  object: 'mark',
                  type: 'bold',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ', ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'italic',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ' or ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'underlined',
              marks: [
                {
                  object: 'mark',
                  type: 'underlined',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: '.',
              marks: [],
            },
          ],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});
