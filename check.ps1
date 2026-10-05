 = Get-Content 'script.js'
 = 0
for (=0;  -lt .Length; ++) {
     = []
     = [regex]::Matches(, '\{').Count
     = [regex]::Matches(, '\}').Count
     += ( - )
}
Write-Host 'Final balance: ' 
Remove-Item 'check.ps1'
