import PropTypes from 'prop-types'

const Toolbar = ({ filters, selected, onSelectFilter }) => {

  Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func,
  }

  return (
    <div className='flex items-center gap-2 flex-wrap'>
      {filters.map((filter, index) => (
        <button
          key={`tbar-btn-${index}`}
          className={`btn btn-outline rounded-none min-h-8 max-h-8 border hover:bg-stone-700 hover:text-white border-stone-700 
            ${filter === selected ? 'bg-stone-700 text-white' : 'text-stone-700'}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      )
      )}
    </div>
  )
}

export default Toolbar