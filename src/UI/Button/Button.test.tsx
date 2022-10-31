import Button from './Button'
import { shallow } from 'enzyme'

describe('Button', () => {
  it('should be disabled when props disabled is true', () => {
    const button = shallow(
      <Button type='submit' variant='primary' disabled={true}>
        Click
      </Button>,
    )

    expect(button.hasClass('disabled')).toBe(true)
  })
})
