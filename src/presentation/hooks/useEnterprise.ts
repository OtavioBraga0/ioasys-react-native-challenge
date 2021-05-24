import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {enterpriseSelector} from '../../domain/ducks/enterpriseReducer';
import {Enterprise, EnterpriseType} from '../../domain/entities/enterprise';
import {
  getDetailedEnterpriseThunk,
  getEnterprisesThunk,
  filterEnterprisesThunk,
} from '../../domain/thunks/enterpriseThunk';

type UseEnterpriseProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedType: number;
  setType: Dispatch<SetStateAction<number>>;
  types: EnterpriseType[];
  enterprises: Enterprise[];
  detailedEnterprise: Enterprise | null;
  actions: {
    handleFilter: () => void;
    handleGetEnterpriseDetails: (id: number) => void;
  };
};

export const useEnterprise = (): UseEnterpriseProps => {
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<number>(0);
  const {enterprises, filteredEnterprises, detailedEnterprise} =
    useSelector(enterpriseSelector);

  const dispatch = useDispatch();

  const types = useMemo(
    () =>
      Array.from(
        new Set(enterprises.map(enterprise => enterprise.enterprise_type.id)),
      ).map(id => ({
        id,
        enterprise_type_name: enterprises.find(
          enterprise => enterprise.enterprise_type.id === id,
        )?.enterprise_type.enterprise_type_name as string,
      })),
    [enterprises],
  );

  const handleFilter = useCallback(async () => {
    dispatch(filterEnterprisesThunk({search, type}));
  }, [search, dispatch, type]);

  const handleGetEnterpriseDetails = useCallback(
    (id: number) => {
      dispatch(getDetailedEnterpriseThunk(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getEnterprisesThunk());
  }, [dispatch]);

  useEffect(() => {
    if (search || type) {
      handleFilter();
    } else {
      dispatch(getEnterprisesThunk());
    }
  }, [search, type, handleFilter, dispatch]);

  return {
    search,
    setSearch,
    selectedType: type,
    setType,
    types,
    enterprises:
      filteredEnterprises.length > 0 ? filteredEnterprises : enterprises,
    detailedEnterprise,
    actions: {
      handleFilter,
      handleGetEnterpriseDetails,
    },
  };
};
