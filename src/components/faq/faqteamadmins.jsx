const TeamAdmins = 
`
<h3 style={accordionH2}>Change Admin rights for your Grant Us Funding Team</h3> 
<p>On a Grant Us Funding Team, there are <strong>Admins</strong> and <strong>Team Members</strong>. Admins can manage membership to the team, change settings, and manage billing. Grant Us Funding recommends that all Grant Us Funding paid accounts have at least two Admins. The Team Admin has global rights and the Co-Admin/s will be assigned their roles by the Team Admin. If you’re a solo team, you are automatically assigned as Team Admin and will not need additional members to start your subscription.</p> 
<p>Admins on a paid Grant Us Funding plan will have global permissions (as a team Admin) or a more limited set of permissions (as user Co-Admin).  The Co-Admin’s roles will be assigned by the Team Admin.</p>
<br/> 
<h3>How to Add an additional Admin:</h3> 
<ol style={personal}> 
    <li>Log in to GrantUsFunding.com</li>                         
    <li>In your Portal, go to your User page and to the Team Management section.</li>                         
    <li> If the user you’d like to add Admin permissions to is not already Invited to your Team, use the Invite form to initiate the process. Once they accept and register, they will be added to your Team.</li>                         
    <li>In the Team Management section, select “Admin” in the dropdown box next to their name.</li>                         
    <li>Click the 
        <strong>Save Changes</strong>  button.
    </li>                         
</ol>
<br/> 
<h3>How to Transfer an Admin role/downgrade from an Admin to another role:</h3> 
<p><em>Grant Us Funding</em> requires every Team to have at least one <strong>Admin</strong>. Before you change your role from Admin to Team Member, please make sure another User on your Team is also assigned to the Admin role. If there is not another User assigned to this role, you will not be able to proceed with the role change.</p> 
<ol style={personal}> 
    <li>Log in to GrantUsFunding.com</li>                         
    <li> In your Portal, go to your User page and to the Team Management section.</li>                         
    <li> If the user you’d like to add Admin permissions to is not already Invited to your Team, use the Invite form to initiate the process. Once they accept and register, they will be added to your Team.</li>                         
    <li> In the Team Management section, select “Admin” in the dropdown box next to their name.</li>                         
    <li> Click the 
        <strong>Save Changes</strong> button.
    </li>                         
    <li>Return to Team Management and change your role from “Admin” in the dropdown to your preferred role.</li>                         
    <li>Click the 
        <strong>Save Changes</strong> button.
    </li>                         
</ol>
<br/> 
<h3>How to change Co-Admin permissions:</h3> 
<ol style={personal}> 
    <li>Log in to GrantUsFunding.com.</li>                         
    <li> If you’re already an Admin, you’ll be signed into your Admin portal.</li>                         
    <li>In the Admin section go to the role area</li>                         
    <li>Find the member you would like to become/or remove as a Co-Admin and select their new role from the dropdown.</li>                         
    <li>Check or uncheck the appropriate changes.</li>                         
    <li>Click the Save button.</li>                         
</ol>
<br/> 
<h3>Tiered Admin permissions</h3> 
<p>Not every Co-Admin has to have the same permissions. If you are the Team Admin you can designate other Co-Admins and assign appropriate permissions. (see our listing of options below)</p>
<br/>
<br/> 
<table> 
    <tr> 
        <th></th> 
        <th>Admin</th> 
        <th>Co-Admin</th> 
        <th>Team Member</th> 
    </tr>                         
    <tr> 
        <td style={tdCategory}>Org-wide settings</td> 
        <td></td> 
        <td></td> 
        <td></td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Global authentication settings for account: passwords, 2FA, etc.</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change global sharing controls</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change Organization pic/icon</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Add/Change: other Admins</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdCategory}>Project management:</td> 
        <td></td> 
        <td></td> 
        <td></td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Create/Remove Projects</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change name of Projects</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Limit teams to __ people</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change project pic/icon</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdCategory}>Member management</td> 
        <td></td> 
        <td></td> 
        <td></td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Create/invite/assign roles/remove and suspend Co-Admins</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Create/invite/assign roles/remove  and suspend Team Members</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Remove Self</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change Team Member email</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Self</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Send invitation reminders</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change name of Teams</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Reset Co-Admin passwords</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Reset Team Member passwords</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Self</td> 
    </tr>                         
    <tr> 
        <td style={tdCategory}>Viewing permissions</td> 
        <td></td> 
        <td></td> 
        <td></td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Non-admin activity reports</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>View members tab</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>View accounts tab</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>View company activity feed</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>View dashboard</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>View Team Member profiles</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Generate per-user activity logs</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Self</td> 
    </tr>                         
    <tr> 
        <td style={tdCategory}>Account settings</td> 
        <td></td> 
        <td></td> 
        <td></td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Add/change enrollment/Plan</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Access billing tab</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Change accounting information </td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td>No</td> 
    </tr>                         
    <tr> 
        <td style={tdOne}>Access help & contact support</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
        <td style={tdYes}>Yes</td> 
    </tr>                         
</table> 
`

export default TeamAdmins;