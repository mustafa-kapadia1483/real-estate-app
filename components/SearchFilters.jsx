import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Select,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);
  const searchProperties = filterValues => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach(item => {
      query[item.name] = item.value;
    });
    router.push({ pathname: path, query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map(filter => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            border="1px"
            borderColor="gray.800"
            onChange={e =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map(item => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
