import SearchFrom from './SearchForm'
import { shallow } from 'enzyme'
import { useAxios } from 'hooks/useAxios'

jest.mock('hooks/useAxios')

const mockUseAxios = useAxios as jest.MockedFunction<typeof useAxios>

const setData = jest.fn()
const convertDegree = jest.fn()

describe('SearchForm', () => {
  it('should call weather api when users submit form', () => {
    const fetch = jest.fn()

    mockUseAxios.mockReturnValue({
      error: '',
      loading: false,
      response: {},
      fetch,
    })

    const wrapper = shallow(
      <SearchFrom convertDegree={convertDegree} setData={setData} toggleDisabled={true} />,
    )
    const form = wrapper.find('.SearchForm').at(0)

    expect(form.exists()).toBe(true)

    form.simulate('submit', { preventDefault: jest.fn() })

    expect(fetch).toBeCalled()
  })
})
