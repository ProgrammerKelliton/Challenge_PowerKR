// Components
import { Select } from 'tamagui';

// Icons
import { ChevronDown } from '@tamagui/lucide-icons';

export default function Selector() {
  return (
    <Select defaultValue=''>
      <Select.Trigger
        w={131}
        padding='$12'
        borderRadius='$full'
        borderColor='$gray-400'
        iconAfter={<ChevronDown size='$20' />}
      >
        <Select.Value placeholder='Todos' fontWeight='600' fontSize='$14' />
      </Select.Trigger>

      <Select.Content>
        <Select.ScrollUpButton />

        <Select.Viewport>
          <Select.Group>
            <Select.Label></Select.Label>

            <Select.Item value='' index={0}>
              <Select.ItemText>Item 1</Select.ItemText>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton />
      </Select.Content>
    </Select>
  );
}
