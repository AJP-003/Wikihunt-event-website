
function validate() {
	var digits = document.frm.digits1.value;
	if(digits == 'nepa')
	{
		location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSef-1zG_NoseQoZesyaF-tyQeswyWAbh6gpdW85aASOkaiCWA/viewform?usp=sf_link';
		
	}
	else if (digits == 'NEPA')
	{
		location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSef-1zG_NoseQoZesyaF-tyQeswyWAbh6gpdW85aASOkaiCWA/viewform?usp=sf_link';
	}
	else
	{
		alert('Code is wrong');
	}
	
	return false;
	
}