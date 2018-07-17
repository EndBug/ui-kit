import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from './checkbox';

jest.mock('invariant');

const createTestProps = custom => ({
  name: 'bar',
  value: 'foo',
  isDisabled: false,
  isChecked: false,
  isIndeterminate: false,
  onChange: jest.fn(),

  // HoC
  handleMouseOver: jest.fn(),
  handleMouseOut: jest.fn(),
  isMouseOver: false,
  ...custom,
});

describe('<Checkbox>', () => {
  describe('rendering', () => {
    let props;
    let wrapper;
    describe('without children', () => {
      beforeEach(() => {
        props = createTestProps();

        wrapper = shallow(<Checkbox {...props} />);
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should supply `onChange` to the `input`', () => {
        expect(wrapper.find('input')).toHaveProp('onChange', props.onChange);
      });

      describe('with `data-*`', () => {
        beforeEach(() => {
          props = createTestProps({
            'data-test': 'foo-attribute-select-me-from-e2e',
          });
          wrapper = shallow(<Checkbox {...props} />);
        });
        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
      });

      describe('when disabled', () => {
        beforeEach(() => {
          props = createTestProps({ isDisabled: true });

          wrapper = shallow(<Checkbox {...props} />);
        });

        it('should disable the `input`', () => {
          expect(wrapper.find('input')).toHaveProp(
            'disabled',
            props.isDisabled
          );
        });
        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
      });

      describe('when intermediate', () => {
        describe('is true', () => {
          beforeEach(() => {
            props = createTestProps({ isChecked: true, isIndeterminate: true });
            wrapper = shallow(<Checkbox {...props} />);
          });

          it('should not check the checkbox', () => {
            expect(wrapper.find('input')).toHaveProp('checked', false);
          });
          it('should match snapshot', () => {
            expect(wrapper).toMatchSnapshot();
          });
        });
      });

      describe('with error', () => {
        beforeEach(() => {
          props = createTestProps({ hasError: true });

          wrapper = shallow(<Checkbox {...props} />);
        });

        it('should `label` have error styles', () => {
          expect(wrapper.find('label')).toHaveProp(
            'className',
            'labelWrapper labelWrapperError'
          );
        });
        it('should match snapshot', () => {
          expect(wrapper).toMatchSnapshot();
        });
      });

      describe('when checked', () => {
        describe('is true', () => {
          describe('with `isIndeterminate`', () => {
            beforeEach(() => {
              props = createTestProps({
                isChecked: true,
                isIndeterminate: true,
              });

              wrapper = shallow(<Checkbox {...props} />);
            });
            it('should match snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not check the `input`', () => {
              expect(wrapper.find('input')).toHaveProp('checked', false);
            });
          });
          describe('without `isIndeterminate`', () => {
            beforeEach(() => {
              props = createTestProps({
                isChecked: true,
                isIndeterminate: false,
              });

              wrapper = shallow(<Checkbox {...props} />);
            });
            it('should match snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not check the `input`', () => {
              expect(wrapper.find('input')).toHaveProp('checked', true);
            });
          });
        });
        describe('is false', () => {
          describe('with `isIndeterminate`', () => {
            beforeEach(() => {
              props = createTestProps({
                isChecked: false,
                isIndeterminate: true,
              });

              wrapper = shallow(<Checkbox {...props} />);
            });
            it('should match snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not check the `input`', () => {
              expect(wrapper.find('input')).toHaveProp('checked', false);
            });
          });
          describe('without `isIndeterminate`', () => {
            beforeEach(() => {
              props = createTestProps({
                isChecked: false,
                isIndeterminate: false,
              });

              wrapper = shallow(<Checkbox {...props} />);
            });
            it('should match snapshot', () => {
              expect(wrapper).toMatchSnapshot();
            });

            it('should not check the `input`', () => {
              expect(wrapper.find('input')).toHaveProp('checked', false);
            });
          });
        });
      });
    });

    describe('with children', () => {
      beforeEach(() => {
        props = createTestProps();

        wrapper = shallow(<Checkbox {...props}>{'Some label'}</Checkbox>);
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});

describe('callbacks', () => {
  const createEvent = ({ isChecked = true } = {}) => ({
    target: {
      isChecked,
    },
  });

  describe('when changing', () => {
    let props;
    describe('when isChecked', () => {
      beforeEach(() => {
        props = createTestProps({ isChecked: true });

        const wrapper = shallow(<Checkbox {...props} />);
        wrapper
          .find('input')
          .simulate('change', createEvent({ isChecked: props.isChecked }));
      });

      it('should invoke `onChange`', () => {
        expect(props.onChange).toHaveBeenCalled();
      });

      it('should invoke `onChange` with `isChecked`', () => {
        expect(props.onChange).toHaveBeenCalledWith(
          expect.objectContaining({
            target: expect.objectContaining({
              isChecked: props.isChecked,
            }),
          })
        );
      });

      it('should invoke `onChange` with `event`', () => {
        expect(props.onChange).toHaveBeenCalledWith(
          expect.objectContaining({
            target: expect.any(Object),
          })
        );
      });
    });

    describe('when not isChecked', () => {
      beforeEach(() => {
        props = createTestProps({ isChecked: false });

        const wrapper = shallow(<Checkbox {...props} />);

        wrapper
          .find('input')
          .simulate('change', createEvent({ isChecked: props.isChecked }));
      });

      it('should invoke `onChange`', () => {
        expect(props.onChange).toHaveBeenCalled();
      });

      it('should invoke `onChange` with `isChecked`', () => {
        expect(props.onChange).toHaveBeenCalledWith(
          expect.objectContaining({
            target: expect.objectContaining({
              isChecked: props.isChecked,
            }),
          })
        );
      });

      it('should invoke `onChange` with `event`', () => {
        expect(props.onChange).toHaveBeenCalledWith(
          expect.objectContaining({
            target: expect.any(Object),
          })
        );
      });
    });
  });
});
