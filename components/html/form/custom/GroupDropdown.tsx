import { getAllGroups } from 'lib/groups'
import { UseFormRegister } from 'react-hook-form'
import { ReceiptFormData } from 'types/forms'
import Dropdown from './Dropdown'

type props = {
  register: UseFormRegister<ReceiptFormData>
  errors?: string
}

//TODO: Need to fetch the actual groups from OW4 and use them.
const GroupDropdown = ({ register, errors }: props) => {
  return (
    <div className="w-2/3 ml-4">
      <Dropdown
        defaultOption={{ value: 'default', label: 'Velg komite/gruppe' }}
        options={getAllGroups().map((group) => {
          return { value: group.name_long, label: group.name_long }
        })} //TODO: FIx this ugly thing
        label="Ansvarlig enhet"
        name="responsible_unit"
        register={register}
        errors={errors}
      />
    </div>
  )
}

export default GroupDropdown
