import React, { useState, useMemo, useEffect } from 'react';

interface PermissionNode {
  roleID: string;
  roleName: string;
  menuName: string;
  childID: string;
  pMenuName: string;
  parentID: string;
  shortNo: string;
  plavel: string;
  isChecked: string;
  modulePermisisonCount: string;
  permisionCount: string;
  isSensetive: string;
  helpText: string;
  isSpecial: string;
  htmlFlag: string;
  htmlContent: string;
  children?: PermissionNode[];
  [key: string]: any;
}

interface ApiResponse {
  success: boolean;
  message: string;
  result: PermissionNode[];
}

const buildTree = (list: PermissionNode[]): PermissionNode[] => {
  const map: { [key: string]: PermissionNode } = {};
  const roots: PermissionNode[] = [];
  const filteredList = list.filter(node => !node.isbookkeepingsubscriptionhotels);

  filteredList.forEach((node) => {
    map[node.childID] = { ...node, children: [] };
  });

  filteredList.forEach((node) => {
    const mappedNode = map[node.childID];
    if (node.parentID === "0" || !map[node.parentID]) {
      roots.push(mappedNode);
    } else {
      map[node.parentID].children?.push(mappedNode);
    }
  });
  return roots;
};

const findParentPath = (nodes: PermissionNode[], targetId: string, currentPath: string[] = []): string[] | null => {
  for (const node of nodes) {
    if (node.childID === targetId) {
      return currentPath;
    }
    if (node.children && node.children.length > 0) {
      const path = findParentPath(node.children, targetId, [...currentPath, node.childID]);
      if (path) return path;
    }
  }
  return null;
};

export default function PermissionTree({ apiData }: { apiData: ApiResponse }) {
  const [fieldData] = useState({
    roleName: "Owner / Executive",
    isLowSecurityRole: "No"
  });

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => {
    const initialSelected = new Set<string>();
    apiData.result.forEach(item => {
      if (item.isChecked === "Yes" && !item.isbookkeepingsubscriptionhotels) {
        initialSelected.add(item.childID);
      }
    });
    return initialSelected;
  });

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const treeData = useMemo(() => buildTree(apiData.result), [apiData]);

  const getAllChildIds = (node: PermissionNode, ids: string[] = []): string[] => {
    if (node.children) {
      node.children.forEach(child => {
        ids.push(child.childID);
        getAllChildIds(child, ids);
      });
    }
    return ids;
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setExpandedIds(new Set());
      return;
    }

    const nextExpanded = new Set<string>();
    const lowerSearch = searchTerm.toLowerCase();

    apiData.result.forEach(item => {
      if (item.menuName.toLowerCase().includes(lowerSearch) && !item.isbookkeepingsubscriptionhotels) {
        const parentPath = findParentPath(treeData, item.childID);
        if (parentPath) {
          parentPath.forEach(pId => nextExpanded.add(pId));
        }
      }
    });

    setExpandedIds(nextExpanded);
  }, [searchTerm, apiData, treeData]);

  const handleExpandAllToggle = () => {
    const validData = apiData.result.filter(item => !item.isbookkeepingsubscriptionhotels);
    const allParentIds = validData
      .filter(item => validData.some(child => child.parentID === item.childID))
      .map(item => item.childID);

    if (expandedIds.size === allParentIds.length) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(allParentIds));
    }
  };

  const handleCheckboxChange = (node: PermissionNode, checked: boolean) => {
    const nextSelected = new Set(selectedIds);
    const childIds = getAllChildIds(node);

    if (checked) {
      nextSelected.add(node.childID);
      childIds.forEach(id => nextSelected.add(id));

      const parentPath = findParentPath(treeData, node.childID);
      if (parentPath) {
        parentPath.forEach(id => nextSelected.add(id));
      }
    } else {
      nextSelected.delete(node.childID);
      childIds.forEach(id => nextSelected.delete(id));
    }

    setSelectedIds(nextSelected);
  };

  const toggleExpand = (id: string) => {
    const nextExpanded = new Set(expandedIds);
    if (nextExpanded.has(id)) {
      nextExpanded.delete(id);
    } else {
      nextExpanded.add(id);
    }
    setExpandedIds(nextExpanded);
  };

  const handleSelectAllToggle = (rootNode: PermissionNode) => {
    const nextSelected = new Set(selectedIds);
    const allIds = [rootNode.childID, ...getAllChildIds(rootNode)];
    const isAllSelected = allIds.every(id => selectedIds.has(id));

    if (isAllSelected) {
      allIds.forEach(id => nextSelected.delete(id));
    } else {
      allIds.forEach(id => nextSelected.add(id));
    }

    setSelectedIds(nextSelected);
  };

  const renderHighlightedText = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} style={{ backgroundColor: '#ccf2f4', padding: '2px 0', color: 'inherit', borderRadius: 2 }}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const CustomCheckbox = ({ checked, disabled, onChange }: { checked: boolean; disabled: boolean; onChange: (e: any) => void }) => {
    return (
      <div className="position-relative d-flex align-items-center" style={{ width: 16, height: 16, marginRight: 10 }} onClick={(e) => e.stopPropagation()}>
        <input 
          type="checkbox" 
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          style={{ 
            appearance: 'none',
            WebkitAppearance: 'none',
            width: 16,
            height: 16,
            border: disabled ? '1px solid #dcdfe3' : checked ? '1px solid #2caf92' : '1px solid #b2b6ba',
            borderRadius: 3,
            backgroundColor: disabled ? '#f1f3f5' : checked ? '#2caf92' : '#fff',
            cursor: disabled ? 'default' : 'pointer',
            outline: 'none',
            margin: 0
          }}
        />
        {checked && !disabled && (
          <svg style={{ position: 'absolute', top: 3, left: 2, pointerEvents: 'none' }} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    );
  };

  const renderTreeNode = (node: PermissionNode, depth: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedIds.has(node.childID);
    const isChecked = selectedIds.has(node.childID);

    const isLowSecurity = fieldData.isLowSecurityRole.toString().toLowerCase() === "yes";
    const opacityStyle = isLowSecurity || node.isSpecial !== "0" ? { opacity: 0.5 } : { opacity: 1 };
    const isAdmin = fieldData.roleName.toLowerCase() === "administrator";
    const isCheckboxDisabled = isAdmin ? true : node.isSpecial !== "0" ? true : isLowSecurity ? true : false;

    const ChevronIcon = () => (
      <svg 
        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ 
          transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', 
          transition: 'transform 0.2s',
          display: 'inline-block'
        }}
      >
        <path d="M8.92247 14.7558L13.6783 9.99997L8.92247 5.24414L7.74414 6.42247L11.3216 9.99997L7.74414 13.5775L8.92247 14.7558Z" fill="#84888C"></path>
      </svg>
    );

    if (node.parentID === "0") {
      const allChildren = getAllChildIds(node);
      const selectedCount = allChildren.filter(id => selectedIds.has(id)).length;
      const totalCount = allChildren.length;
      const allNodesInRoot = [node.childID, ...allChildren];
      const isEntireGroupSelected = allNodesInRoot.every(id => selectedIds.has(id));
      const isSelectAllDisabled = isAdmin || isLowSecurity;

      return (
        <div key={node.childID} style={{ borderBottom: '1px solid #eef1f4' }}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div onClick={() => toggleExpand(node.childID)} className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
              <span className="mr-1" style={{ height: 20 }}><ChevronIcon /></span>
              <div className="d-flex flex-column" style={opacityStyle}>
                <span style={{ fontSize: 16, color: '#1a1f23' }}>
                  {renderHighlightedText(node.menuName, searchTerm)}
                </span>
                <span className="text-muted" style={{ fontSize: 12, marginTop: 2 }}>
                  {selectedCount} / {totalCount}
                </span>
              </div>
            </div>
            <button 
              disabled={isSelectAllDisabled}
              onClick={() => handleSelectAllToggle(node)}
              className="btn btn-link p-0 font-weight-normal"
              style={{ color: isSelectAllDisabled ? '#b2b6ba' : '#2caf92', textDecoration: 'none', fontSize: 14 }}
            >
              {isEntireGroupSelected ? 'Unselect All' : 'Select All'}
            </button>
          </div>
          {isExpanded && hasChildren && (
            <div className="mb-2" style={{ borderLeft: '1px solid #e0e3e6', marginLeft: 10 }}>
              {node.children?.map(child => renderTreeNode(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={node.childID} className="d-flex flex-column">
        <div 
          className="d-flex align-items-center py-2" 
          style={{ 
            borderBottom: '1px solid #f8f9fa',
            paddingLeft: depth * 20
          }}
        >
          <span 
            onClick={() => toggleExpand(node.childID)}
            style={{ width: 20, height: 20, cursor: hasChildren ? 'pointer' : 'default', visibility: hasChildren ? 'visible' : 'hidden', marginRight: 4 }}
          >
            <ChevronIcon />
          </span>
          <div className="d-flex align-items-center">
            <CustomCheckbox checked={isChecked} disabled={isCheckboxDisabled} onChange={(e) => handleCheckboxChange(node, e.target.checked)} />
            <span 
              onClick={() => !isCheckboxDisabled && handleCheckboxChange(node, !isChecked)}
              className="font-weight-bold"
              style={{ 
                fontSize: 14, 
                color: '#1a1f23', 
                cursor: isCheckboxDisabled ? 'default' : 'pointer', 
                userSelect: 'none',
                ...opacityStyle
              }}
            >
              {renderHighlightedText(node.menuName, searchTerm)}
            </span>
          </div>

          {node.htmlFlag === "1" && node.htmlContent && (
            <span className="ml-2" style={{ fontSize: 13 }} dangerouslySetInnerHTML={{ __html: node.htmlContent }} />
          )}

          {node.isSensetive === "1" && (
            <span className="badge ml-2" style={{ backgroundColor: '#fdf2e9', color: '#e67e22', padding: '4px 8px', fontSize: 11, border: '1px solid #fadbd8', ...opacityStyle }}>
              Sensitive
            </span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="d-flex flex-column">
            {node.children?.map(child => renderTreeNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const validParents = apiData.result.filter(item => !item.isbookkeepingsubscriptionhotels);
  const allParentsCount = validParents.filter(item => validParents.some(child => child.parentID === item.childID)).length;
  const isAllExpanded = expandedIds.size === allParentsCount;

  return (
    <div className="container-fluid bg-white px-3" style={{ maxWidth: 800, margin: '20px auto' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative" style={{ width: '300px' }}>
          <input 
            type="text" 
            placeholder="Filter Permissions by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control pl-4"
            style={{ border: '1px solid #2caf92', borderRadius: 4, fontSize: 14, boxShadow: 'none' }}
          />
          <span className="position-absolute text-muted" style={{ left: 10, top: 8 }}>🔍</span>
        </div>
        <button 
          onClick={handleExpandAllToggle}
          className="btn btn-link p-0 d-flex align-items-center"
          style={{ color: '#2caf92', textDecoration: 'none', fontSize: 14 }}
        >
          <span className="mr-1" style={{ fontSize: 16 }}>{isAllExpanded ? '−' : '+'}</span>
          {isAllExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>
      <div style={{ borderTop: '1px solid #e0e3e6' }}>
        {treeData.map(rootNode => renderTreeNode(rootNode))}
      </div>
    </div>
  );
}