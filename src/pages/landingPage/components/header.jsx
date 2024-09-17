import { Menu, Drawer, Accordion, List } from '@mantine/core';
import { ReactComponent as TruliaIcon } from 'assets/icons/trulia.svg';
import { ReactComponent as HamburgerIcon } from 'assets/icons/hamburger.svg';
import { useDisclosure } from '@mantine/hooks';

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='flex justify-between items-center px-4 py-3  bg-[#fff] z-50  fixed top-0 left-0 right-0'>
      <div className='flex items-center'>
        <TruliaIcon className='' />

        <div className='hidden lg:flex gap-8 '>
          <div className='flex items-center text-xs gap-1  cursor-pointer  h-8'>
            <Menu
              trigger='click-hover'
              position='bottom-start'
              openDelay={100}
              closeDelay={400}
              classNames={{
                label: '!text-base !font-bold !text-primary',
                dropdown: '!p-0',
                item: 'hover:!underline',
                itemLabel: 'text-[15px] ',
              }}
            >
              <Menu.Target>
                <p className='text-primary ml-5 !text-base !font-bold cursor-pointer hover:bg-[#007882] hover:text-white hover:rounded-md !px-4 py-2 '>
                  Buy
                </p>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Bartleville</Menu.Label>
                <Menu.Item>Homes for Sale</Menu.Item>
                <Menu.Item>Open Houses</Menu.Item>
                <Menu.Item>New Homes</Menu.Item>

                <Menu.Item>Recently Sold</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu
              trigger='click-hover'
              position='bottom-start'
              openDelay={100}
              closeDelay={400}
              classNames={{
                label: '!text-base !font-bold !text-primary',
                dropdown: '!p-0',
                item: 'hover:!underline',
                itemLabel: 'text-[15px] ',
              }}
            >
              <Menu.Target>
                <p className='text-primary !text-base !font-bold cursor-pointer hover:bg-[#007882] hover:text-white hover:rounded-md !px-4 py-2 '>
                  Rent
                </p>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Bartleville</Menu.Label>
                <Menu.Item>All Rentals</Menu.Item>
                <Menu.Item>Apartments for Rent</Menu.Item>
                <Menu.Item>Houses for Rent</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Post A Rental Listing</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Menu
              trigger='click-hover'
              position='bottom-start'
              openDelay={100}
              width={200}
              closeDelay={400}
              classNames={{
                label: '!text-base !font-bold !text-primary',
                dropdown: '!p-0',
                item: 'hover:!underline',
                itemLabel: 'text-[15px] ',
              }}
            >
              <Menu.Target>
                <p className='text-primary !text-base !font-bold cursor-pointer hover:bg-[#007882] hover:text-white hover:rounded-md !px-4 py-2 '>
                  Mortgage
                </p>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Bartleville</Menu.Label>
                <Menu.Item>Mortgage Overview</Menu.Item>
                <Menu.Item>Get Pre-Qualified</Menu.Item>
                <Menu.Item>Mortgage Rates</Menu.Item>
                <Menu.Item>Refinance Rates</Menu.Item>

                <Menu.Divider />
                <Menu.Item>Mortgage Calculator</Menu.Item>
                <Menu.Item>Affordability Calculator</Menu.Item>
                <Menu.Item>Refined Calculator</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      <div className='flex  items-center gap-5'>
        <div className='hidden lg:flex  items-center gap-5'>
          <p className='text-primary !text-base !font-bold cursor-pointer hover:bg-[#007882] hover:text-white hover:rounded-md !px-4 py-2 '>
            Saved Homes
          </p>

          <p className='text-primary !text-base !font-bold cursor-pointer hover:bg-[#007882] hover:text-white hover:rounded-md !px-4 py-2'>
            Saved Searches
          </p>
          <p className='text-primary border border-[#cdd1d4] !text-base !font-bold cursor-pointer hover:bg-[#E8E9EA]  rounded-md !px-4 py-2'>
            Sign up or Log in
          </p>
        </div>
        <HamburgerIcon className='cursor-pointer lg:hidden ' onClick={open} />
      </div>

      <Drawer opened={opened} onClose={close} size='40%' position='right'>
        <p className='!text-base !font-bold !text-primary px-4 cursor-pointer'>
          Sign up or Log in
        </p>
        <Accordion multiple>
          <Accordion.Item value='buy'>
            <Accordion.Control className='!text-base !font-bold !text-primary'>
              Buy
            </Accordion.Control>
            <Accordion.Panel>
              <List spacing='xs' size='sm' className='text-[15px]'>
                <List.Item className='font-bold'>Bartleville</List.Item>
                <List.Item className='text-[15px]'>Homes for Sale</List.Item>
                <List.Item className='text-[15px]'>Open Houses</List.Item>
                <List.Item className='text-[15px]'>New Homes</List.Item>
                <List.Item className='text-[15px]'>Recently Sold</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value='rent'>
            <Accordion.Control className='!text-base !font-bold !text-primary'>
              Rent
            </Accordion.Control>
            <Accordion.Panel>
              <List spacing='xs' size='sm' className='text-[15px]'>
                <List.Item className='font-bold'>Bartleville</List.Item>
                <List.Item className='text-[15px]'>All Rentals</List.Item>
                <List.Item className='text-[15px]'>
                  Apartments for Rent
                </List.Item>
                <List.Item className='text-[15px]'>Houses for Rent</List.Item>
                <List.Item className='text-[15px]'>
                  Post A Rental Listing
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='mortgage'>
            <Accordion.Control className='!text-base !font-bold !text-primary'>
              Mortgage
            </Accordion.Control>
            <Accordion.Panel>
              <List spacing='xs' size='sm' className='text-[15px]'>
                <List.Item className='font-bold'>Bartleville</List.Item>
                <List.Item className='text-[15px]'>Mortgage Overview</List.Item>
                <List.Item className='text-[15px]'>Get Pre-Qualified</List.Item>
                <List.Item className='text-[15px]'>Mortgage Rates</List.Item>
                <List.Item className='text-[15px]'>Refinance Rates</List.Item>

                <List.Item className='text-[15px]'>
                  Mortgage Calculator
                </List.Item>
                <List.Item className='text-[15px]'>
                  Affordability Calculator
                </List.Item>
                <List.Item className='text-[15px]'>
                  Refined Calculator
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='local-info'>
            <Accordion.Control className='!text-base !font-bold !text-primary'>
              Local Info
            </Accordion.Control>
            <Accordion.Panel>
              <List spacing='xs' size='sm' className='text-[15px]'>
                <List.Item className='text-[15px]'>
                  {' '}
                  All Trulia Neighborhood Guides
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='additional-resources'>
            <Accordion.Control>Additional Resources</Accordion.Control>
            <Accordion.Panel>
              <List spacing='xs' size='sm' className='text-[15px]'>
                <List.Item className='font-bold'>Trulia Blogs</List.Item>
                <List.Item className='text-[15px]'>Help Center</List.Item>
                <List.Item className='text-[15px]'>For Professionals</List.Item>
                <List.Item className='text-[15px]'>Get Leads by ZIP</List.Item>
                <List.Item className='text-[15px]'>
                  Get Mortgage Leads
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Drawer>
    </div>
  );
};

export default Header;
